import i18n from 'i18next';
import glossary from './ptBr/glossary/glossary'

i18n.init({
    lng: 'pt-BR',
    debug: false,
    resources: {
        'pt-BR': {
            glossary
        }
    }
})

export default i18n