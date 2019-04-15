import Layout from '../../components/MyLayout.js'

export default function Cart() {
  this.state= "test";

  return (
    <Layout>

      <h1> Shoping cart</h1>
      <p>  {this.state}  </p>
      <form>
        <label>
          Email:
          <input type="text" name="name" />
        </label>

        <label>
          First Name:
          <input type="text" name="name" />
        </label>

        <label>
        Last Name:
          <input type="text" name="name" />
        </label>

        <input type="submit" value="Submit" />
      </form>

    </Layout>
  )
}