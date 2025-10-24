export default function SortTasks(tasks, sortType) {
    const sortedTasks = [...tasks];
    
    switch(sortType) {
        case 'fromimportant':
            return sortedTasks.sort((a, b) => b.priority - a.priority);
        
        case 'ofimportance':
            return sortedTasks.sort((a, b) => a.priority - b.priority);
        
        case 'atoz':
            return sortedTasks.sort((a, b) => 
                a.title.localeCompare(b.title, 'ru')
            );
        
        case 'ztoa':
            return sortedTasks.sort((a, b) => 
                b.title.localeCompare(a.title, 'ru')
            );
        
        case 'dateto':
            return sortedTasks.sort((a, b) => 
                new Date(a.createdAt) - new Date(b.createdAt)
            );
        
        case 'datefrom':
            return sortedTasks.sort((a, b) => 
                new Date(b.createdAt) - new Date(a.createdAt)
            );
        
        case 'updateto':
            return sortedTasks.sort((a, b) => 
                new Date(a.updatedAt) - new Date(b.updatedAt)
            );
        
        case 'updatefrom':
            return sortedTasks.sort((a, b) => 
                new Date(b.updatedAt) - new Date(a.updatedAt)
            );
        
        default:
            return sortedTasks;
    }
};