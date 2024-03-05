import { useSelector } from "react-redux"
import { useState } from "react"
import { UsernameForm } from "../UsernameForm"

function User (){
  
  const user = useSelector((state) => state.userReducer)
  const [isOpen, setIsOpen] = useState(false)
  
  const handleCancel = () => {
    // Fermer le formulaire
    setIsOpen(false);
  };
  
  return(
    <>
    {isOpen && <UsernameForm closeForm={handleCancel}>
    {/* Ajout du bouton CANCEL pour la fermeture du formulaire */}
    <button type="button" onClick={handleCancel} className="edit-button">Cancel</button>
    </UsernameForm>}
    <main className="main bg-dark">
    <div className="header">
    {!isOpen && <h1>Welcome back<br />{user.firstName} {user.lastName} !</h1>}
    {!isOpen && <button className="edit-button" onClick={() => setIsOpen(!isOpen)}>Edit User name</button>}
    </div>
    <h2 className="sr-only">Accounts</h2>
    <section className="account">
    <div className="account-content-wrapper">
    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
    <p className="account-amount">$2,082.79</p>
    <p className="account-amount-description">Available Balance</p>
    </div>
    <div className="account-content-wrapper cta">
    <button className="transaction-button">View transactions</button>
    </div>
    </section>
    <section className="account">
    <div className="account-content-wrapper">
    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
    <p className="account-amount">$10,928.42</p>
    <p className="account-amount-description">Available Balance</p>
    </div>
    <div className="account-content-wrapper cta">
    <button className="transaction-button">View transactions</button>
    </div>
    </section>
    <section className="account">
    <div className="account-content-wrapper">
    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
    <p className="account-amount">$184.30</p>
    <p className="account-amount-description">Current Balance</p>
    </div>
    <div className="account-content-wrapper cta">
    <button className="transaction-button">View transactions</button>
    </div>
    </section>
    </main>
    </>
    )
  }
  export default User