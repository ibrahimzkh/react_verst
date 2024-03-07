import LogoFoot from "./LogoFoot"
import UlFoot from "./UlFoot"

function Footer () {
    return(
      <div className="footer">
         <LogoFoot/>
            <UlFoot title={'Партнерам'}/>
            <UlFoot title={'Разработчикам'}/>
            <UlFoot title={'Вакансии'}/>
      </div>
    )
}
export default Footer