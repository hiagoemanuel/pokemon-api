import images from '../../../../constants/images'

import { ContainerFilter, CollapseFilter } from './style'
import { Line, SmallTitle } from '../../../../styles/components-style'

function Filter({ reference }) {
    return (
        <ContainerFilter>
            <img className='icon' src={images.filterIcon} alt="filter" />
            <CollapseFilter ref={reference} style={{display: 'none'}}>
                <SmallTitle>Filtre pelos tipos de pokémons</SmallTitle>
                <Line />
            </CollapseFilter>
        </ContainerFilter>
    )
}

export { Filter }