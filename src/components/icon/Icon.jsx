import InboxIcon from './icons/InboxIcon'
import LoadingIcon from './icons/LoadingIcon'
import MoonIcon from './icons/MoonIcon'
import PlusSecondIcon from './icons/PlusSecondIcon'
import SunIcon from './icons/SunIcon'
import Minus from './icons/Minus'
import ArrowTwo from './icons/ArrowTwo'
import ChevronTop from './icons/ChevronTop'
import CrossIcon from './icons/CrossIcon'

import AtoZ from './icons/AtoZ'
import DateFrom from './icons/DateFrom'
import DateTo from './icons/DateTo'
import FilterIcon from './icons/FilterIcon'
import FromImportant from './icons/FromImportant'
import OfImportance from './icons/OfImportance'
import UpdateFrom from './icons/UpdateFrom'
import UpdateTo from './icons/UpdateTo'
import ZtoA from './icons/ZtoA'
import ArrowBottom from './icons/ArrowBottom'
import CheckIcon from './icons/CheckIcon'
import EditIcon from './icons/EditIcon'
import TrashIcon from './icons/TrashIcon'

export default function Icon({ name, ...props }) {
    if (name == 'inbox') return <InboxIcon {...props} />
    if (name == 'loading') return <LoadingIcon {...props} />
    if (name == 'moon') return <MoonIcon {...props} />
    if (name == 'plussecond') return <PlusSecondIcon {...props} />
    if (name == 'sun') return <SunIcon {...props} />
    if (name == 'minus') return <Minus {...props} />
    if (name == 'arrow') return <ArrowTwo {...props} />
    if (name == 'chevron') return <ChevronTop {...props} />
    if (name == 'cross') return <CrossIcon {...props} />

    if (name == 'atoz') return <AtoZ {...props} />
    if (name == 'datefrom') return <DateFrom {...props} />
    if (name == 'dateto') return <DateTo {...props} />
    if (name == 'filter') return <FilterIcon {...props} />
    if (name == 'fromimportant') return <FromImportant {...props} />
    if (name == 'ofimportance') return <OfImportance {...props} />
    if (name == 'updatefrom') return <UpdateFrom {...props} />
    if (name == 'updateto') return <UpdateTo {...props} />
    if (name == 'ztoa') return <ZtoA {...props} />
    if (name == 'arrowbottom') return <ArrowBottom {...props} />
    if (name == 'check') return <CheckIcon {...props} />
    if (name == 'edit') return <EditIcon {...props} />
    if (name == 'trash') return <TrashIcon {...props} />
}