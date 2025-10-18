import InboxIcon from './icons/InboxIcon'
import LoadingIcon from './icons/LoadingIcon'
import MoonIcon from './icons/MoonIcon'
import PlusSecondIcon from './icons/PlusSecondIcon'
import SunIcon from './icons/SunIcon'
import Minus from './icons/Minus'
import ArrowTwo from './icons/ArrowTwo'
import ChevronTop from './icons/ChevronTop'
import CrossIcon from './icons/CrossIcon'

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
}