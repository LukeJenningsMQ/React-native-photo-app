export default class DataManager{
    static myInstance = null;
    initalMemories = [
    ]
    users = [
        {
          id: 1,
          name:'Luke Jennings',
          email:'ltj@g.com',
          password:'noise'
      },
      {
        id: 2,
        name:'Megan Judge',
        email:'MegJudge@gmail.com',
        password:'cats1'
      }
      ];

    userID = '';
    static getInstance(){
        if(DataManager.myInstance==null){
            DataManager.myInstance = new DataManager();
        }
        return this.myInstance;
    }

    getUserID(){
        return this.userID
    }
    
    setUserID(id){
        this.userID = id;
    }

    getMemoryID(id){
        return this.initalMemories.filter((item) => item.userid === id);
    }

    getAllUsers(){
        return this.users.filter((item) => item.id > 0);
    }

    getMemoryCat(id, selectedCollect){
        return this.initalMemories.filter((item) => item.userid === id && item.collection === selectedCollect);
        
    }

    addMemory(memory){
        this.initalMemories.push(memory);
        console.log(this.initalMemories);
    }
    addUser(user){
        this.users.push(user);
        console.log(this.users);
    }

  handleDelete = (Memory) => {
    this.initalMemories = this.initalMemories.filter(item => item.id !== Memory.id);
  }
}