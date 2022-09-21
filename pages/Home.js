import { useState, useEffect } from "react"
import Layout from "../components/Layout"
import { authHandler, logOut } from "../utils/functions"
import { useRouter } from "next/router"
const Home = ({ children }) => {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const checkUser = async () => {
            const user = await authHandler()
            if (!user) {
                logOut()
                return
            }
            router.push('/Dash')
            setLoading(false)
        }
        checkUser()
    }, [])
    if (loading) {
        return <i>Loading ....</i>
    }
    return <Layout>
        {children}
    </Layout>
}
export default Home