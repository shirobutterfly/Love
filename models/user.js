const mongoose = require('mongoose');
<<<<<<< HEAD
const Schema = mongoose.Schema;
// const bcrypt = require ('bcrypt');
const SALT_WORK_FACTOR = 10;

let userSchema = new Schema({
		
			username: {
				type:String, 
				required: "Username is Required", 
				// index: {unique: true}, 
				trim: true
			},

			password: {
				type: String, 
				required: "Password is Required", 
				unique: true, 
				trim: true, 
				validate: [
      				function(input) {
        				return input.length >= 6;
      				},
      			'Password should be longer.'
    			]
			},
		    admin: Boolean, //not likely to use this
=======
// const Schema = mongoose.Schema;
// const bcrypt = require ('bcrypt');
// const SALT_WORK_FACTOR = 10;

// let userSchema = new Schema({
// 			username: {
// 				type:String, 
// 				required: "Username is Required", 
// 				// index: {unique: true}, 
// 				trim: true
// 			},

// 			password: {
// 				type: String, 
// 				required: "Password is Required", 
// 				unique: true, 
// 				trim: true, 
// 				// validate: [
//     //   				function(input) {
//     //     				return input.length >= 6;
//     //   				},
//     //   			'Password should be longer.'
//     // 			]
// 			},
// 		    admin: Boolean, //not likely to use this
>>>>>>> c421c20dc5badeb0af8a26d35cbe53cf25fd1ac0
			

// 			email: {
//     			type: String,
//     			unique:true,
//     			// match: [/.+\@.+\..+/, "Please enter a valid e-mail address"],
//   			},

//   			facebook: {
// 				id: String,
// 				token: String,
// 				email: String,
// 				name: String
// 			},
// 			//password hash!
// 			 userCreated: {
//     			type: Date,
//     			default: Date.now
//   			},
			
<<<<<<< HEAD
			relationships: {
				"Beach": {
					question: Number,
					score: Number
				},
				"Mansion": {
					question: Number,
					score: Number
				},
				"Swamp": {
					question: Number,
					score: Number
				},
				"Snow": {
					question: Number,
					score: Number
				}

			}

});

// // hash and authenticate below
// // hash pw before it is saved
// userSchema.pre('save', function(next){
// 	let user = this;
// // only hash pw if it has been modified or new
// 	if(!user.isModified('password')) return next();
// // generate a salt
// bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
// 	if (err) return next(err);
// 	// hash new pw using new salt
// 	bcrypt.hash(user.password, salt, function (err, hash){
// 		if (err) return next(err);
// 		// override the input password with the hashed one
// 		user.password = hash;
// 		next();
// 	});
// });

// });
// // password verification
// userSchema.methods.comparePassword = function(password, callback) {
//   bcrypt.compare(password, this.password, callback);
//   		if (err) return cb(err);
// 		cb(null, isMatch);
// }

module.exports = mongoose.model('User', userSchema);

/*
alternative code 
to hash pw - make unique
userSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
}

userSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.password);
}
*/
=======
// 			relationships: {
// 				"Beach": {
// 					question: Number,
// 					score: Number
// 				},
// 				"Mansion": {
// 					question: Number,
// 					score: Number
// 				},
// 				"Swamp": {
// 					question: Number,
// 					score: Number
// 				},
// 				"Snow": {
// 					question: Number,
// 					score: Number
// 				}

// 			}

// });

// // hash and authenticate below
// // hash pw before it is saved
// // userSchema.pre('save', function(next){
// // 	let user = this;
// // // only hash pw if it has been modified or new
// // 	if(!user.isModified('password')) return next();
// // // generate a salt
// // bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
// // 	if (err) return next(err);
// // 	// hash new pw using new salt
// // 	bcrypt.hash(user.password, salt, function (err, hash){
// // 		if (err) return next(err);
// // 		// override the input password with the hashed one
// // 		user.password = hash;
// // 		next();
// // 	});
// // });

// // });
// // // password verification
// // userSchema.methods.comparePassword = function(password, callback) {
// //   bcrypt.compare(password, this.password, callback);
// //   		if (err) return cb(err);
// // 		cb(null, isMatch);
// // }



// // alternative code 
// // to hash pw - make unique
// // *******************
// userSchema.methods.generateHash = function(password){
// 	return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
// }

// userSchema.methods.validPassword = function(password){
// 	return bcrypt.compareSync(password, this.password);
// }
// // *******************

// // module.exports = mongoose.model('User', userSchema);

mongoose.connect("mongodb://localhost:27017/loveTest");
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("we're connected!!!!!!!");
})

var userSchema = mongoose.Schema({ username: String, email: String, password: String });

module.exports = mongoose.model('User', userSchema);
>>>>>>> c421c20dc5badeb0af8a26d35cbe53cf25fd1ac0
