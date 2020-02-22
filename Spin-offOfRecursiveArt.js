//start a count for recursion to go a certain amount 
var count = 0 ;

var drawShape = function(x, y, radius, z, a, b) {
    //count recursion to keep track how many times call itself (to not get runtime error)
count = count +1;

   //fill is dependent on the parameters passed
    fill(z,a,b);
    //drawing the ellipse
    ellipse(x, y, radius, radius);
    
    //only want to run 5 times
    if (count < 5){
        
        //so radius changes
        radius = radius - 30;
        //so color changes
    z= z+100;
    a = a +20;
    b = b +30;
        
        //recursion call function again
    return drawShape(x,y,radius,z,a,b);
    }
    
};

drawShape(2, 50, 381, 1, 1, 1);
