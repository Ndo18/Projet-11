//MES IMAGES
import iconChat from '../../assets/img/icon-chat.webp'
import iconMoney from '../../assets/img/icon-money.webp'
import iconSecurity from '../../assets/img/icon-security.webp'
import FeatureItem from '../features/FeatureItem'

//ALT IMAGE
const moneyalt = "Money Icon"
const chatalt = "Chat Icon"
const securityalt = "Security Icon"

//MES TITRES
const featureTitleChat = 'You are our #1 priority'
const featureTitleMoney = 'More savings means higher rates'
const featureTitleSecurity = 'Security you can trust'

//MES TEXTES
const featureTextChat = 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
const featureTextMoney = 'The more you save with us, the higher your interest rate will be!'
const featureTextSecurity = 'We use top of the line encryption to make sure your data and money is always safe.'

function Accueil() {
return(
    <>
    <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
   <FeatureItem
            iconUrl={iconChat}
            title={featureTitleChat}
            text={featureTextChat}
            alt={chatalt}
          />
          <FeatureItem
            iconUrl={iconMoney}
            title={featureTitleMoney}
            text={featureTextMoney}
            alt={moneyalt}
          />
          <FeatureItem
            iconUrl={iconSecurity}
            title={featureTitleSecurity}
            text={featureTextSecurity}
            alt={securityalt}
          />
      </section>
    </>     
)
}
export default Accueil