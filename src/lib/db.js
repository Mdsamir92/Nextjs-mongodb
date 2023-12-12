const {name,password} = process.env;
export const connectionStp = "mongodb+srv://"+name+":"+password+"@cluster0.7brjblo.mongodb.net/productDB?retryWrites=true&w=majority";


