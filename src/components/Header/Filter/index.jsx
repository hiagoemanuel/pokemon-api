import images from '../../../constants/images'

import { ContainerFilter, AcordeonContent } from './style'
import { Line, SmallTitle } from '../../../styles/components-style'

function Filter() {
    return (
        <ContainerFilter>
            <img className='icon' src={images.filterIcon} alt="filter" />
            <AcordeonContent className='acordeon-content'>
                <SmallTitle>Filtre pelos tipos de pokémons</SmallTitle>
                <Line />
            </AcordeonContent>
        </ContainerFilter>
    )
}

export { Filter }