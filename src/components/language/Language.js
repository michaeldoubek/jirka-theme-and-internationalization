import {createContext, useState} from "react";
import {IntlProvider} from "react-intl";
import messagesEn from './locales.en.json';
import messagesCs from './locales.cs.json';

export const LanguageContext = createContext({
    lang: "en",
    changeLang: () => {},
});

function LanguageProvider(props) {
    const [lang, setLang] = useState('en');

    return (
        <LanguageContext.Provider value={{lang, changeLang: setLang}}>
            <IntlProvider locale={lang} messages={lang === 'en' ? messagesEn : messagesCs} defaultLocale="en">
                {props.children}
            </IntlProvider>
        </LanguageContext.Provider>
    );
}

export default LanguageProvider;
