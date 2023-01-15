// описание модели данных Card т.к это не примитив


module.exports = class CardDto{
    id
    title
    content

    constructor(model){
        this.id = model.id;
        this.title = model.title;
        this.content = model.content;
    }
}