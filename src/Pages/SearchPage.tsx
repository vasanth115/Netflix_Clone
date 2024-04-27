import BackButton from "../Components/BackButton/BackButton"
import LandingHeader from "../Components/LandingHeader/LandingHeader"
import SearchContent from "../Components/SearchContent/SearchContent"


const SearchPage = () => {

    return (
        <div>
            <LandingHeader show={true} focus={true} />
            <BackButton />
            <SearchContent />
        </div>
    )
}

export default SearchPage
