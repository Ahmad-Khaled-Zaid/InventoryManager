import { useState, useEffect } from "react"
import Layout from "../components/Layout"
import { authHandler, logOut } from "../utils/functions"
const Home = ({ children }) => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const checkUser = async () => {
            const user = await authHandler()
            if (!user) {
                logOut()
                return
            }
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