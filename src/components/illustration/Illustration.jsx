import Book from './illustrations/Book'
import Task from './illustrations/Task'

export default function Illustration({ name, ...props }) {
    if (name == 'book') return <Book {...props} />
    if (name == 'task') return <Task {...props} />
}