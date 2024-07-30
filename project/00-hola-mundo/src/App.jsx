import './App.css'
import { TwitterFollowCard } from './twitterFollowCard'

export function App() {
    const formatUserName = (userName) => `@${userName}`
    return (
        <section className = "App">
            <TwitterFollowCard 
            formatUserName={formatUserName} 
            userName ="monardop" 
            name ="Pablo Monardo" 
            isFollowing={true}
            /> 
            
            <TwitterFollowCard 
            formatUserName={formatUserName} 
            userName ="monardop" 
            name ="Pablo Monardo" 
            isFollowing={true}
            /> 

            <TwitterFollowCard 
            formatUserName={formatUserName} 
            userName ="monardop" 
            name ="Pablo Monardo" 
            isFollowing={true}
            /> 
        </section>
    )
}