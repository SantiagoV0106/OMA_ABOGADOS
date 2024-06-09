
export const useScroll = () => {

    const scrollTo = () => {
        const contactUsSection = document.getElementById('contact-us')
        contactUsSection.scrollIntoView({ behavior: 'smooth' })
    }

    return {scrollTo}
}
