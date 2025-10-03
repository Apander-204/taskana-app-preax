import InboxIcon from './icons/InboxIcon'
import LoadingIcon from './icons/LoadingIcon'
import MoonIcon from './icons/MoonIcon'
import PlusSecondIcon from './icons/PlusSecondIcon'
import SunIcon from './icons/SunIcon'

export default function Icon({ name, ...props }) {
    if (name == 'inbox') return <InboxIcon {...props} />
    if (name == 'loading') return <LoadingIcon {...props} />
    if (name == 'moon') return <MoonIcon {...props} />
    if (name == 'plussecond') return <PlusSecondIcon {...props} />
    if (name == 'sun') return <SunIcon {...props} />
}