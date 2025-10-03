import Book from './illustrations/Book'
import Task from './illustrations/Task'
import DarkBook from './illustrations/DarkBook'
import DarkTask from './illustrations/DarkTask'


export default function Illustration({ name, ...props }) {
    if (name == 'book') return <Book {...props} />
    if (name == 'task') return <Task {...props} />
    if (name == 'darkbook') return <DarkBook {...props} />
    if (name == 'darktask') return <DarkTask {...props} />
}