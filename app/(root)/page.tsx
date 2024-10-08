import HeaderBox from "@/components/HeaderBox"
import RightSidebar from "@/components/RightSidebar"
import TotalBalanceBox from "@/components/TotalBalanceBox"

const Home = () => {
  const loggedIn = { firstName: "Aldi", lastName: "JSM", email: "contact@jsmastery.pro" }
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox type="greeting" title="Welcome" user={loggedIn?.firstname || "Guest"} subtext="Access and manage your account and transaction efficiently." />
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.35} />
        </header>

        RECENT TRANSACTION
      </div>
      <RightSidebar user={loggedIn} transactions={[]} 
      
      banks={[{currentBalance: 123.50},{currentBalance: 500.50}]} />
    </section>
  )
}

export default Home
