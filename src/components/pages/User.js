import { useSelector } from "react-redux"
import { useState } from "react"
import { UsernameForm } from "../UsernameFor"
import FeatureUser from "../features/FeatureUser"

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
    <FeatureUser
    title="Argent Bank Checking (x8349)"
    amount="$2,082.79"
    description="Available Balance"
    />
    <FeatureUser
    title="Argent Bank Savings (x6712)"
    amount="$10,928.42"
    description="Available Balance"
    />
    <FeatureUser
    title="Argent Bank Credit Card (x8349)"
    amount="$184.30"
    description="Current Balance"
    />
    </main>
    </>
    )
  }
  export default User