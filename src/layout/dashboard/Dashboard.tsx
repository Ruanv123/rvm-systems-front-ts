import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  useContext,
} from 'react'
import { GetToken, UseStorage } from '../../utils/useStorage'
import { API_BASE_URL } from '../../constants/Constants'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { SHeader, SLayout, SMain } from './styles'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { HeaderDashboard } from '../../components/headerDash/HeaderDashboard'

interface DashboardLayoutProps {
  children: ReactNode
}

interface DeocdedToken {
  id: number
}

interface UserData {
  id: number
  name: string
  email: string
  password: string
  avatar?: string
  createdAt: string
  desc?: string
  resetCode: string
  telefone: string
  updatedAt: string
}

interface LayoutContextProps {
  userData: UserData
}

export const LayoutContext = createContext<LayoutContextProps>({
  userData: {
    id: 0,
    name: '',
    createdAt: '',
    email: '',
    password: '',
    resetCode: '',
    telefone: '',
    updatedAt: '',
  },
})

export const DashLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserData>({
    id: 0,
    name: '',
    createdAt: '',
    email: '',
    password: '',
    resetCode: '',
    telefone: '',
    updatedAt: '',
  })

  const fetchRefreshToken = async () => {
    try {
      const refreshToken = GetToken('refreshToken')

      if (refreshToken) {
        const response = await axios.post(
          `${API_BASE_URL}/auth/refresh-token`,
          {
            refreshToken,
          },
        )
        const { token } = response.data

        UseStorage('token', token)
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
      }
    } catch (error) {
      console.error(error)
    }
  }

  const fetchId = async () => {
    try {
      const token = GetToken('token')
      if (token) {
        const decodedToken = jwtDecode<DeocdedToken>(token)
        const id: number = decodedToken.id

        const res = await axios.get(`${API_BASE_URL}/user/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (res.data) {
          setUserData({ ...res.data })
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchId()
    fetchRefreshToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <LayoutContext.Provider value={{ userData }}>
      <SLayout>
        <Sidebar id={userData?.id} />
        <SHeader>
          <HeaderDashboard />
          <SMain>{children}</SMain>
        </SHeader>
      </SLayout>
    </LayoutContext.Provider>
  )
}

export const useUser = () => useContext(LayoutContext)
