import { Layout } from '@components/layouts/Layout'
import TextField from '@mui/material/TextField'

export function Home() {
  return (
    <>
      <Layout>
        <h1>Svalinn</h1>
        <TextField id='Name' label='Name' variant='outlined' />
      </Layout>
    </>
  )
}

