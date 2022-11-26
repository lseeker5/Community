export default function NavBar(){
    return(
        <div className="nav-bar">
            <button type="button">Sign In</button>
            <select>
                <option value="" disabled selected hidden>What would you like to do?</option>
                <option value="Calender">Calender</option>
                <option value="Upcoming Community Events">Upcoming Community Events</option>
                <option value="Meet-ups">Meet-ups</option>
                <option value="Chats">Chats</option>
                <option value="Community Space">Community Space</option>
                <option value="Settings">Settings</option>
            </select>
        </div>
        
    )
}