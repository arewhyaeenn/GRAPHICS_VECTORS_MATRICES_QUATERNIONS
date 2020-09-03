// test functions
var testlog = function(bool)
{
	if (bool)
	{
		console.log("%cTEST PASSED","color:green");
	}
	else
	{
		console.log("%cTEST FAILED","color:red");
	}
}

var floatApproxEquals = function(f1, f2)
{
	let threshold = 0.001;
	if (isNaN(f1) || isNaN(f2))
	{
		return false;
	}
	let abs = Math.abs(f1-f2);
	if (isNaN(abs))
	{
		return false;
	}
	if ( abs > threshold)
	{
		return false;
	}
	return true;
}

var forceCreateVector = function(x, y, z)
{
	var out = new Vector();
	out.x = x;
	out.y = y;
	out.z = z;
	return out;
}

var forceCreateQuaternion = function(w, x, y, z)
{
	var out = new Quaternion();
	out.w = w;
	out.x = x;
	out.y = y;
	out.z = z;
	return out;
}


// VECTOR ONLY
console.log("%c***TESTING Vector.constructor***","color:blue")

console.log("	Creating Vector with coords (1,2,3)");
v = new Vector(1,2,3);
correct = forceCreateVector(1,2,3);

console.log("	x coordinate is",v.x,"(should be 1)");
console.log("	y coordinate is",v.y,"(should be 2)");
console.log("	z coordinate is",v.z,"(should be 3)");
testlog(Vector.equals(v,correct));


console.log("%c***TESTING Vector.set***","color:blue");

console.log("	Setting vector coords to (4,5,6)");
v.set(4,5,6);
correct = forceCreateVector(4,5,6);

console.log("	x coordinate is",v.x,"(should be 4)");
console.log("	y coordinate is",v.y,"(should be 5)");
console.log("	z coordinate is",v.z,"(should be 6)");
testlog(Vector.equals(v,correct));


console.log("%c***Testing Vector.add (in place)***","color:blue")

console.log("	Adding vector with coords (1, -1, -2) to previous result");
v.add(new Vector(1, -1, -2));
correct = forceCreateVector(5,4,4);

console.log("	x coordinate is",v.x,"(should be 5)");
console.log("	y coordinate is",v.y,"(should be 4)");
console.log("	z coordinate is",v.z,"(should be 4)");
testlog(Vector.equals(v,correct));


console.log("%c***TESTING Vector.add (not in place)***","color:blue");

console.log("	Adding vector with coords (-1, 1, 2) to previous result");
v2 = v.add(new Vector(-1, 1, 2), false);
correct = forceCreateVector(5, 4, 4);
correct2 = forceCreateVector(4,5,6);

console.log("	x coordinate of result is",v2.x,"(should be 4)");
console.log("	y coordinate of result is",v2.y,"(should be 5)");
console.log("	z coordinate of result is",v2.z,"(should be 6)");
console.log("	x coordinate of original is",v.x,"(should be 5)");
console.log("	y coordinate of original is",v.y,"(should be 4)");
console.log("	z coordinate of original is",v.z,"(should be 4)");
testlog(Vector.equals(v,correct) && Vector.equals(v2,correct2));


console.log("%c***TESTING Vector.subtract (in place)***","color:blue");

v = new Vector(1,1,1);
console.log("	Subtracting a vector from itself...");
v.subtract(v);
correct = forceCreateVector(0,0,0);

console.log("	x coordinate of result is",v.x,"(should be 0)");
console.log("	y coordinate of result is",v.y,"(should be 0)");
console.log("	z coordinate of result is",v.z,"(should be 0)");
testlog(Vector.equals(v,correct));


console.log("%c***TESTING Vector.subtract (not in place)***","color:blue");

v = new Vector(1,1,1);
console.log("	Subtracting (1,2,3) from (1,1,1)");
v2 = v.subtract(new Vector(1,2,3), false);
correct = forceCreateVector(1,1,1);
correct2 = forceCreateVector(0, -1, -2);

console.log("	x coordinate of result is",v2.x,"(should be 0)");
console.log("	y coordinate of result is",v2.y,"(should be -1)");
console.log("	z coordinate of result is",v2.z,"(should be -2)");
console.log("	x coordinate of original is",v.x,"(should be 1)");
console.log("	y coordinate of original is",v.y,"(should be 1)");
console.log("	z coordinate of original is",v.z,"(should be 1)");
testlog(Vector.equals(v,correct) && Vector.equals(v2, correct2));


console.log("%c***TESTING Vector.scale (not in place)***","color:blue");

v = new Vector(1,-1,1);
console.log("	Scaling vector (1,-1,1) by vector (-1,7,3.5)");
v2 = v.scale(new Vector(-1, 7, 3.5), false);
correct = forceCreateVector(1, -1, 1);
correct2 = forceCreateVector(-1, -7, 3.5);

console.log("	x coordinate of result is",v2.x,"(should be -1)");
console.log("	y coordinate of result is",v2.y,"(should be -7)");
console.log("	z coordinate of result is",v2.z,"(should be 3.5)");
console.log("	x coordinate of original is",v.x,"(should be 1)");
console.log("	y coordinate of original is",v.y,"(should be -1)");
console.log("	z coordinate of original is",v.z,"(should be 1)");
testlog(Vector.equals(v,correct) && Vector.equals(v2, correct2));


console.log("%c***TESTING Vector.scale (in place) with the same two vectors***","color:blue");

v = new Vector(1,-1,1);
console.log("	Scaling vector...");
v.scale(new Vector(-1, 7, 3.5));
correct = forceCreateVector(-1,-7,3.5);

console.log("	x coordinate is",v.x,"(should be -1");
console.log("	y coordinate is",v.y,"(should be -7");
console.log("	z coordinate is",v.z,"(should be 3.5");
testlog(Vector.equals(v,correct));


console.log("%c***TESTING Vector.inverse***","color:blue");

console.log("	Inverting vector (1,-1,0)");
v = new Vector(1, -1, 0);
v2 = v.inverse();
correct = forceCreateVector(1, -1, 0);
correct2 = forceCreateVector(-1, 1, 0);

console.log("	x coordinate of inverse is",v2.x,"(should be -1)");
console.log("	y coordinate of inverse is",v2.y,"(should be 1)");
console.log("	z coordinate of inverse is",v2.z,"(should be -0)");
console.log("	x coordinate of original is",v.x,"(should be 1)");
console.log("	y coordinate of original is",v.y,"(should be -1)");
console.log("	z coordinate of original is",v.z,"(should be 0)");
testlog(Vector.equals(v,correct) && Vector.equals(v2, correct2));


console.log("%c***TESTING Vector.magnitude***","color:blue");

v = new Vector(3,4,0);
console.log("	Finding magnitude of vector (3,4,0)");
var m = v.magnitude();
correct = 5;

console.log("	Result is",m,"(should be 5)");
testlog(floatApproxEquals(m,correct));

v = new Vector(-3,4,-12);
console.log("	Finding magnitude of vector (-3,4,-12)");
m = v.magnitude();
correct = 13;

console.log("	Result is",m,"(should be 13)");
testlog(floatApproxEquals(m,correct));


console.log("%c***TESTING Vector.normalize (not in place)***","color:blue");

v = new Vector(3,4,0);
console.log("	Getting normalized vector in (3,4,0) direction");
v2 = v.normalize(false);
correct = forceCreateVector(3,4,0);
correct2 = forceCreateVector(0.6,0.8,0);

console.log("	x coordinate of result is",v2.x,"(should be 0.6)");
console.log("	y coordinate of result is",v2.y,"(should be 0.8)");
console.log("	z coordinate of result is",v2.z,"(should be 0)");
console.log("	x coordinate of original is",v.x,"(should be 3)");
console.log("	y coordinate of original is",v.y,"(should be 4)");
console.log("	z coordinate of original is",v.z,"(should be 0)");
testlog(Vector.equals(v,correct) && Vector.equals(v2, correct2));


console.log("%c***TESTING Vector.normalize (in place)***","color:blue");

v = new Vector(3,4,0);
console.log("	Normalizing (3,4,0)");
v.normalize();
correct = forceCreateVector(0.6,0.8,0);

console.log("	x coordinate of result is",v.x,"(should be 0.6)");
console.log("	y coordinate of result is",v.y,"(should be 0.8)");
console.log("	z coordinate of result is",v.z,"(should be 0)");
testlog(Vector.equals(v,correct));

v = new Vector(-3,4,12);
console.log("	Normalizing (-3,4,12)");
v.normalize();
correct = forceCreateVector(-3.0/13,4.0/13,12.0/13);

console.log("	x coordinate of result is",v.x,"(should be " + (-3.0/13) +")");
console.log("	y coordinate of result is",v.y,"(should be " + (4.0/13) +")");
console.log("	z coordinate of result is",v.z,"(should be " + (12.0/13) +")");
testlog(Vector.equals(v,correct));


console.log("%c***TESTING Vector.sum***","color:blue");

console.log("	Summing vectors (1,-1,2) (-4, -2, -1) (3,3,-1)");
v = Vector.sum([new Vector(1,-1,2), new Vector(-4, -2, -1), new Vector(3,3,-1)]);
correct = forceCreateVector(0,0,0);

console.log("	x coordinate is",v.x,"(should be 0)");
console.log("	y coordinate is",v.y,"(should be 0)");
console.log("	z coordinate is",v.z,"(should be 0)");
testlog(Vector.equals(v,correct));

console.log("	Summing vectors (1,2,3) (-3, -2, -1) (5,4,2)");
v = Vector.sum([new Vector(1,2,3), new Vector(-3, -2, -1), new Vector(5,4,2)]);
correct = forceCreateVector(3,4,4);

console.log("	x coordinate is",v.x,"(should be 3)");
console.log("	y coordinate is",v.y,"(should be 4)");
console.log("	z coordinate is",v.z,"(should be 4)");
testlog(Vector.equals(v,correct));


console.log("%c***TESTING Vector.dot***","color:blue");

console.log("	Getting dot product of (2,0,3) and (0,-1,4)...");
var d = Vector.dot(new Vector(2,0,3), new Vector(0,-1,4));
correct = 12;

console.log("	Cross product is",d,"(should be 12)");
testlog(floatApproxEquals(d,correct));

console.log("	Getting dot product of (3,4,12) and (-3,-4,-12)...");
var d = Vector.dot(new Vector(3,4,12), new Vector(-3,-4,-12));
correct = -169;

console.log("	Cross product is",d,"(should be -169)");
testlog(floatApproxEquals(d,correct));


console.log("%c***TESTING Vector.cross***","color:blue");

console.log("	Getting cross product of (1,0,0) and (0,1,0) vectors...");
v = Vector.cross(new Vector(1,0,0), new Vector(0,1,0));
correct = forceCreateVector(0,0,1);

console.log("	x coordinate is",v.x,"(should be 0)");
console.log("	y coordinate is",v.y,"(should be 0)");
console.log("	z coordinate is",v.z,"(should be 1)");
testlog(Vector.equals(v,correct));

console.log("	Getting cross product of (0,1,0) and (1,0,0) vectors...");
v = Vector.cross(new Vector(0,1,0), new Vector(1,0,0));
correct = forceCreateVector(0,0,-1);

console.log("	x coordinate is",v.x,"(should be 0)");
console.log("	y coordinate is",v.y,"(should be 0)");
console.log("	z coordinate is",v.z,"(should be -1)");
testlog(Vector.equals(v,correct));

console.log("	Getting cross product of (1,0,0) and (0,0,1) vectors...");
v = Vector.cross(new Vector(1,0,0), new Vector(0,0,1));
correct = forceCreateVector(0,-1,0);

console.log("	x coordinate is",v.x,"(should be 0)");
console.log("	y coordinate is",v.y,"(should be -1)");
console.log("	z coordinate is",v.z,"(should be 0)");
testlog(Vector.equals(v,correct));

console.log("	Getting cross product of (1,2,3) and (3,2,1) vectors...");
v = Vector.cross(new Vector(1,2,3), new Vector(3,2,1));
correct = forceCreateVector(-4, 8, -4);

console.log("	x coordinate is",v.x,"(should be -4)");
console.log("	y coordinate is",v.y,"(should be 8)");
console.log("	z coordinate is",v.z,"(should be -4)");
testlog(Vector.equals(v,correct));


// MATRIX

console.log("%c***TESTING Matrix.identity***","color:blue");

console.log("	Construction identity matrix...");
M = Matrix.identity();
correct = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])

console.log("	Matrix.identity() result is:");
console.log("	",M);
console.log("	Matrix.identity() result should be:");
console.log("	",correct);
testlog(Matrix.equals(M, correct))


console.log("%c***TESTING Matrix.mul***","color:blue");

m1 = Matrix.identity();
m2 = Matrix.identity();
console.log("	Multiplying two identities...");
M = Matrix.mul(m1, m2);
correct = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);

console.log("	Multiplication result is:");
console.log("	",M);
console.log("	Multiplication result should be:");
console.log("	",correct);
testlog(Matrix.equals(M,correct));

m1 = new Float32Array([1, 2, 3, 4,
					   5, 6, 7, 8,
					   9, 10,11,12,
					   13,14,15,16]);
m2 = new Float32Array([17,18,19,20,
					   21,22,23,24,
					   25,26,27,28,
					   29,30,31,32]);
console.log("	Multiplying\n\t\t",m1,"\n\t and\n\t\t",m2);
M = Matrix.mul(m1,m2);
correct = new Float32Array([538, 612, 686, 760, 650, 740, 830, 920, 762, 868, 974, 1080, 874, 996, 1118, 1240]);

console.log("	Multiplication result is:");
console.log("	",M);
console.log("	Multiplication result should be:");
console.log("	",correct);
testlog(Matrix.equals(M,correct));


console.log("%c***TESTING Matrix.prod***","color:blue");

console.log("	Getting product of list of matrices...");
M = [Matrix.identity(), m1, m2];
for (var i = 0; i < M.length; i++)
{
	console.log("	",M[i]);
}
M = Matrix.prod(M);
correct = new Float32Array([538, 612, 686, 760, 650, 740, 830, 920, 762, 868, 974, 1080, 874, 996, 1118, 1240]);

console.log("	Product is:");
console.log("	",M);
console.log("	Product should be:");
console.log("	",correct);
testlog(Matrix.equals(M,correct));

// QUATERNION ONLY
console.log("%c***TESTING Quaternion.constructor (normalized)***","color:blue");

console.log("	Creating Quaternion for 120 degree rotation about x axis.");
q = new Quaternion(2*Math.PI/3, 1, 0, 0, true);
correct = forceCreateQuaternion(0.5,0.8660254037844386,0,0);

console.log("	w is",q.w,"(should be 0.5)");
console.log("	x is",q.x,"(should be 0.8660254037844386)");
console.log("	y is",q.y,"(should be 0)");
console.log("	z is",q.z,"(should be 0)");
testlog(Quaternion.equals(q,correct));


console.log("%c***TESTING Quaternion.constructor (not normalized)***","color:blue");

console.log("	Creating Quaternion for 60 degree rotation about the axis (3,-4,0)");
q = new Quaternion(Math.PI/3, 3, -4, 0);
correct = forceCreateQuaternion(0.8660254037844386, 0.3, -0.4, 0);

console.log("	w is",q.w,"(should be about 0.8660254037844386)");
console.log("	x is",q.x,"(should be about 0.3)");
console.log("	y is",q.y,"(should be about -0.4)");
console.log("	z is",q.z,"(should be 0)");
testlog(Quaternion.equals(q,correct));


console.log("%c***TESTING Quaternion.set***","color:blue");

console.log("	Setting values (1,2,3,4)");
q.set(1,2,3,4);
correct = forceCreateQuaternion(1,2,3,4);

console.log("	w is",q.w,"(should be 1)");
console.log("	x is",q.x,"(should be 2)");
console.log("	y is",q.y,"(should be 3)");
console.log("	z is",q.z,"(should be 4)");
testlog(Quaternion.equals(q,correct));


console.log("%c***TESTING Quaternion.inverse***","color:blue");

q = new Quaternion(Math.PI/3, 3, 0, -4);
console.log("	Inverting the quaternion (Pi/3, 3, 0, -4)");
q = q.inverse();
correct = forceCreateQuaternion(0.8660254037844386, -0.3, 0, 0.4);

console.log("	w is",q.w,"(should be about 0.866)");
console.log("	x is",q.x,"(should be about -0.3)");
console.log("	y is",q.y,"(should be about 0)");
console.log("	z is",q.z,"(should be about 0.4)");
testlog(Quaternion.equals(q,correct));


console.log("%c***TESTING Quaternion.renormalize***","color:blue");

q = new Quaternion();
q.set(0.5, 1, 0, 0);
console.log("	Renormalizing quaterion set to (0.5, 1, 0, 0)");
q.renormalize();
correct = forceCreateQuaternion(0.5,0.8660254037844386,0,0);

console.log("	w is",q.w,"(should be 0.5)");
console.log("	x is",q.x,"(should be 0.8660254037844386)");
console.log("	y is",q.y,"(should be 0)");
console.log("	z is",q.z,"(should be 0)");
testlog(Quaternion.equals(q,correct));


console.log("%c***TESTING Quaternion.compose (not in place)***","color:blue");

console.log("	Creating Quaternion for 90 degree rotation about x axis");
q = new Quaternion(Math.PI/2, 1, 0, 0);
correct = forceCreateQuaternion(0.7071067811865476,0.7071067811865476,0,0);

console.log("	Creating Quaternion for 60 degree rotation about negative z axis");
q2 = new Quaternion(Math.PI/3, 0, 0, -1);
correct2 = forceCreateQuaternion(0.8660254037844387,0,0,-0.5);

console.log("	Composing quaternions as if applied chronologically...");
q3 = q.compose(q2, false);
correct3 = forceCreateQuaternion(0.6123724356957946,0.6123724356957946,-0.35355339059327373,-0.35355339059327373);

console.log("	original w's are",q.w,"and",q2.w,"(should be 0.7071067811865476 and 0.8660254037844387)");
console.log("	original x's is",q.x,"and",q2.x,"(should be 0.7071067811865476 and 0)");
console.log("	original y's is",q.y,"and",q2.y,"(should be 0 and 0)");
console.log("	original z's is",q.z,"and",q2.z,"(should be 0 and -0.5)");
console.log("	resulting w is",q3.w,"(should be 0.6123724356957946)");
console.log("	resulting x is",q3.x,"(should be 0.6123724356957946)");
console.log("	resulting y is",q3.y,"(should be -0.35355339059327373)");
console.log("	resulting z is",q3.z,"(should be -0.35355339059327373)");
testlog(Quaternion.equals(q,correct) && Quaternion.equals(q2,correct2) && Quaternion.equals(q3,correct3));


console.log("%c***TESTING Quaternion.compose (in place)***","color:blue");

console.log("	Composing same Quaternions in place");
q.compose(q2);
correct = forceCreateQuaternion(0.6123724356957946,0.6123724356957946,-0.35355339059327373,-0.35355339059327373);
correct2 = forceCreateQuaternion(0.8660254037844387,0,0,-0.5);

console.log("	w of input quat is",q2.w,"(should be 0.8660254037844387)");
console.log("	x of input quat is",q2.x,"(should be 0)");
console.log("	y of input quat is",q2.y,"(should be 0)");
console.log("	z of input quat is",q2.z,"(should be -0.5)");
console.log("	w of result is",q.w,"(should be 0.6123724356957946)");
console.log("	x of result is",q.x,"(should be 0.6123724356957946)");
console.log("	y of result is",q.y,"(should be -0.35355339059327373)");
console.log("	z of result is",q.z,"(should be -0.35355339059327373)");
testlog(Quaternion.equals(q,correct) && Quaternion.equals(q2,correct2));


console.log("%c***TESTING Quaternion.composition***","color:blue");

console.log("	Composing three Quaternions...");
q = forceCreateQuaternion(0.6123724356957946,0.6123724356957946,-0.35355339059327373,-0.35355339059327373);
qz = forceCreateQuaternion(0,0,0,1);
qc = [q.inverse(), qz, q];
for (var i = 0; i < qc.length; i++)
{
	console.log("	", qc);
}
qc = Quaternion.composition(qc);
correct = forceCreateQuaternion(0, -0.8660254037844386,-0.5,0);

console.log("	w is",qc.w,"(should be 0)");
console.log("	x is",qc.x,"(should be -0.8660254037844386)");
console.log("	y is",qc.y,"(should be -0.5)");
console.log("	z is",qc.z,"(should be 0)");
testlog(Quaternion.equals(qc,correct));


console.log("%c***TESTING Quaternion.applyRotation***","color:blue");

q = forceCreateQuaternion(0.6123724356957946,0.6123724356957946,-0.35355339059327373,-0.35355339059327373);
qz = forceCreateQuaternion(0,0,0,1);
console.log("	Applying",qc,"Quaternion to pure Quaternion on z-axis");
qc = q.applyRotation(qz);
correct = forceCreateQuaternion(0, -0.8660254037844386,-0.5,0);

console.log("	w is",qc.w,"(should be 0)");
console.log("	x is",qc.x,"(should be -0.8660254037844386)");
console.log("	y is",qc.y,"(should be -0.5)");
console.log("	z is",qc.z,"(should be 0)");
testlog(Quaternion.equals(qc,correct));


console.log("%c***TESTING Quaternion.localCompose (not in place)***","color:blue");

qg = new Quaternion(Math.PI/2, 1, 0, 0);
correct = forceCreateQuaternion(0.7071067811865476,0.7071067811865475,0,0);
ql = new Quaternion (Math.PI/2, 0, 0, 1);
correct2 = forceCreateQuaternion(0.7071067811865476,0,0,0.7071067811865475);

console.log("	Composing local rotation",ql,"\n\tinto global rotation",qg);
qr = qg.localCompose(ql, false);
correct3 = forceCreateQuaternion(0.5,0.5,-0.5,0.5);

console.log("	w of global caller is",qg.w,"(should be 0.7071067811865476)");
console.log("	x of global caller is",qg.x,"(should be 0.7071067811865475)");
console.log("	y of global caller is",qg.y,"(should be 0)");
console.log("	z of global caller is",qg.z,"(should be 0)");
console.log("	w of local input is",ql.w,"(should be 0.7071067811865476)");
console.log("	x of local input is",ql.x,"(should be 0)");
console.log("	y of local input is",ql.y,"(should be 0)");
console.log("	z of local input is",ql.z,"(should be 0.7071067811865475)");
console.log("	w of result is",qr.w,"(should be 0.5)");
console.log("	x of result is",qr.x,"(should be 0.5)");
console.log("	y of result is",qr.y,"(should be -0.5)");
console.log("	z of result is",qr.z,"(should be 0.5)");
testlog(Quaternion.equals(qg,correct) && Quaternion.equals(ql,correct2) && Quaternion.equals(qr,correct3));


console.log("%c***TESTING Quaternion.localCompose (in place)***","color:blue");
q = new Quaternion(Math.PI/2, 1, 0, 0);
q2 = new Quaternion (Math.PI/2, 0, 0, 1);
correct2 = forceCreateQuaternion(0.7071067811865476,0,0,0.7071067811865475);
console.log("	Composing local rotation",q2,"\n\tinto global rotation",q);

q.localCompose(q2);
correct = forceCreateQuaternion(0.5,0.5,-0.5,0.5);

console.log("	w of local input is",q2.w,"(should be 0.7071067811865476)");
console.log("	x of local input is",q2.x,"(should be 0)");
console.log("	y of local input is",q2.y,"(should be 0)");
console.log("	z of local input is",q2.z,"(should be 0.7071067811865475)");
console.log("	w of result is",q.w,"(should be 0.5)");
console.log("	x of result is",q.x,"(should be 0.5)");
console.log("	y of result is",q.y,"(should be -0.5)");
console.log("	z of result is",q.z,"(should be 0.5)");
testlog(Quaternion.equals(q,correct) && Quaternion.equals(q2,correct2));

// VECTOR / QUATERNION 
console.log("%c***TESTING Quaternion.fromVector***","color:blue");

console.log("	Creating Quaternion from Vector (0, 0, 1)");
qz = Quaternion.fromVector(new Vector(0,0,1));
correct = forceCreateQuaternion(0,0,0,1);

console.log("	w is",qz.w,"(should be 0)");
console.log("	x is",qz.x,"(should be 0)");
console.log("	y is",qz.y,"(should be 0)");
console.log("	z is",qz.z,"(should be 1)");
testlog(Quaternion.equals(qz,correct));


console.log("%c***TESTING Vector.fromQuaternion***","color:blue");

console.log("	Creating a Vector from a Quaternion with values (0,1,2,3)");
v = Vector.fromQuaternion(Quaternion.fromVector(new Vector(1,2,3)));
correct = forceCreateVector(1,2,3);

console.log("	x value is",v.x,"(should be 1)");
console.log("	y value is",v.y,"(should be 2)");
console.log("	z value is",v.z,"(should be 3)");
testlog(Vector.equals(v,correct));


console.log("%c***TESTING Vector.rotate (not in place)***","color:blue");

v = new Vector(0, 1, 0);
correct = forceCreateVector(0,1,0);
console.log("	Rotating Vector (0, 1, 0) 90 degrees about z axis");
q = new Quaternion(Math.PI/2, 0, 0, 1);
v2 = v.rotate(q, false);
correct2 = forceCreateVector(-1,0,0);

console.log("	original x value is",v.x,"(should be 0)");
console.log("	original y value is",v.y,"(should be 1)");
console.log("	original z value is",v.z,"(should be 0)");
console.log("	resulting x value is",v2.x,"(should be -1)");
console.log("	resulting y value is",v2.y,"(should be 0)");
console.log("	resulting z value is",v2.z,"(should be 0)");
testlog(Vector.equals(v,correct) && Vector.equals(v2,correct2));

v = new Vector(0, 0, 1);
correct = forceCreateVector(0,0,1);
console.log("	Rotating Vector(0, 0, 1) 90 degrees about x axis");
q = new Quaternion(Math.PI/2, 1, 0, 0);
v2 = v.rotate(q, false);
correct2 = forceCreateVector(0,-1,0);

console.log("	original x value is",v.x,"(should be 0)");
console.log("	original y value is",v.y,"(should be 0)");
console.log("	original z value is",v.z,"(should be 1)");
console.log("	resulting x value is",v2.x,"(should be 0)");
console.log("	resulting y value is",v2.y,"(should be -1)");
console.log("	resulting z value is",v2.z,"(should be 0)");
testlog(Vector.equals(v,correct) && Vector.equals(v2,correct2));


console.log("%c***TESTING Vector.rotate (in place)***","color:blue");

v = new Vector(0, 1, 0);
console.log("	Rotating Vector (0, 1, 0) 90 degrees about z axis");
q = new Quaternion(Math.PI/2, 0, 0, 1);
v.rotate(q);
correct = forceCreateVector(-1,0,0);

console.log("	resulting x value is",v.x,"(should be -1)");
console.log("	resulting y value is",v.y,"(should be 0)");
console.log("	resulting z value is",v.z,"(should be 0)");
testlog(Vector.equals(v,correct));

v = new Vector(0, 0, 1);
console.log("	Rotating Vector(0, 0, 1) 90 degrees about x axis");
q = new Quaternion(Math.PI/2, 1, 0, 0);
v.rotate(q);
correct = forceCreateVector(0,-1,0);

console.log("	resulting x value is",v.x,"(should be 0)");
console.log("	resulting y value is",v.y,"(should be -1)");
console.log("	resulting z value is",v.z,"(should be 0)");
testlog(Vector.equals(v,correct));

