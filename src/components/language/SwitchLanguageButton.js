import {useContext} from "react";
import {LanguageContext} from "./Language";

function SwitchLanguageButton() {
    const {lang, changeLang} = useContext(LanguageContext);
    const switchLanguage = () => changeLang(lang === 'en' ? 'cs' : 'en');

    return <button onClick={switchLanguage}>Switch language</button>;
}

export default SwitchLanguageButton;