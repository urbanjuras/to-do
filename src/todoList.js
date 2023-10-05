class Todo {
    constructor(title, desc, author, priority){
        this.title = title
        this.desc = desc
        this.author = author
        this.priority = priority
    }
    createNew(){
        const todo = {
            title:this.title,
            desc:this.desc,
            author:this.author,
            priority:this.priority
        }
        return todo
    }
}

export default Todo