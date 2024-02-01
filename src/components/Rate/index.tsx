import Star from "../../svg/Star"
import * as S from "./styles"

const Rate: React.FC = () => {
    return(
        <S.Container>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <S.RateNumber>5,0</S.RateNumber>
        </S.Container>
    )
}

export default Rate