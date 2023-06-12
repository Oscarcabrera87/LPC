import { Outlet, NavLink } from "react-router-dom"

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav class="navbar nav bg-warning">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="database">Database</NavLink>
        </nav>

        <div className='p-5 text-center bg-warning'>
          <h1 className='mb-3'>Latinx Playwrights Circle</h1>
          <h4 className='mb-3'>The future of American Theatre</h4>
          {/* <a className='btn btn-primary' href='' role='button'>
              Call to action
            </a> */}
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}