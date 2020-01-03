var mat = [];
var hagljdsbva = 0;
class matrixs{

	//constructor(id, matrix){
		//this.id = id;
	constructor(matrix){
		this.id = hagljdsbva;
		hagljdsbva++;
		mat[this.id] = matrix;

	}

	update(matrix){
		mat[this.id] = matrix;
		//console.log(matrix);
	}

	returnid(){
		return (this.id);
	}

	returnmatrix(){
		return(mat[this.id]);
	}

	element(row, column){
		//console.log(mat[this.id]);
		return (mat[this.id][row][column]);
	}

	add(other){
		if (mat[this.id].length == mat[other].length && mat[this.id][0].length == mat[other][0].length){

			this.ans = [];

			for (var i=0; i<mat[this.id].length; i++){
				this.ans[i]= [];
				for (var j =0; j<mat[this.id][0].length; j++){
					this.ans[i][j] = mat[this.id][i][j]+mat[other][i][j];
				}
			}
		return (this.ans);
		}
	}


	multiply(other){

			this.ans = [];

			for (var k=0; k<mat[this.id].length; k++){
				this.ans[k]= [];
				for (var j=0; j<other.returnmatrix()[0].length; j++){
					this.ans[k][j]=0;
					for (var i = 0; i<other.returnmatrix().length; i++){
						this.ans[k][j] += mat[this.id][k][i] * other.returnmatrix()[i][j];
					}
				}
			}
			return (this.ans);
		}
		
	
	scalarmult(p){
		this.mult = p;

		this.ans = [];
	
		for (var i=0; i<mat[this.id].length; i++){
			this.ans[i]= [];
			for (var j =0; j<mat[this.id][0].length; j++){
				this.ans[i][j] = this.mult * mat[this.id][i][j];
			}
		}
		return (this.ans);
	}

	transpose(){
		this.ans = [];
		for (var i=0; i<mat[this.id].length; i++){
			this.ans[i]= [];
			for (var j =0; j<mat[this.id][0].length; j++){
				this.ans[j][i] = mat[this.id][i][j];
			}
		}

		return (this.ans);

	}

}