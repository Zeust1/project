import "./Signuppage.css";

const Signuppage = () => {
  return (
    <div className="signuppage">
      <div class="banner">
	<div class="shopping-image">
		<img src="https://khokhoahoc.org/wp-content/uploads/2022/03/static1.squarespace-300x300-1.png" alt="" />
	</div>
	
	<div class="text">
		<h4>
			HOLIDAY SUPERSALE
		</h4>
	</div>
</div>


      <form method="post" className="form-signup">
        <h2>Sign Up</h2>
        <div className="inp">
          <input type="text" placeholder="Họ tên" required/>
          <input type="date" placeholder="Năm sinh" required/>
          <input type="number" placeholder="CCCD" required/>
          <input type="email" placeholder="Email" required/>
          <input type="tel" placeholder="Sđt" required/>
          <input type="text" placeholder="Level" required/>
          <input type="text" placeholder="Username" required/>
          <input type="password" placeholder="Password" required/>
        </div>
          <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Signuppage;
