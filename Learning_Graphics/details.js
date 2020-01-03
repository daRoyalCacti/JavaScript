function neglogbaser(z, base){
	if (base>0 && z<0){
		return (Math.log(abs(z)))/(Math.log(base));
	}
  if (z>0){
    return (Math.log(z)/Math.log(base));
  }
}


function neglogbasei(z,base){
	if (base>0 && z<0){
		return (PI);
	}
  if (z>0){
    return 0;
  }
}

function negsqrtr(val){
	return (sqrt(abs(val)));
}

function negsqrti(val){
	if (val<0){
		return (1);
	} else {
		return (0);
	}
}

function factorial(k){
	if (k==0 || k==1){
		return (1);
	}

	if (k<0){
		return (-1);
	}
	this.ans = 1;
	for (var i=1; i<=k; i++){
		this.ans *= i;
	}
	return (this.ans);
}

function bincoe(n,k){ //binomial coefficient
	return (factorial(n)/(factorial(k)*factorial(n-k)));
}

function bindis(prob, total, successes){ //binomial distribution
	return(bincoe(total, successes)*pow(prob,successes)*pow(1-prob, total-successes));
}
