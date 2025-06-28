class todoForm{
    constructor(id, title, completed){
        this.id=id|| Math.floor(Math.random());
        this.title=title;
        this.completed=completed;
        this.createdAt=new Date();
    }

    toggleCompleted() {
        this.completed=!this.completed;
    }

    updateTitle(title){
        const updatedTitle=title?.trim();
        if(!updatedTitle||updatedTitle.length===0){
            throw new Error("title cannot be empty");
        }

        this.title=updatedTitle;
    }
}

const todo1= new todoForm(1, "newtodo1", true);
todo1.completed;