import { Bar, Doughnut } from 'react-chartjs-2'
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Row,
} from 'react-bootstrap'

import ProgressBar from 'react-bootstrap/ProgressBar'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Vertical BAR CHART',
    },
  },
}
export const options2 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Vertical BAR CHART',
    },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          reverse: true,
        },
      },
    ],
  },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

const getRandomColor = () => {
  return `rgba(${getRandomInt(250)},${getRandomInt(250)},${getRandomInt(
    250
  )},0.6)`
}
export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => Math.floor(Math.random() * 10000)),
      backgroundColor: getRandomColor(),
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => Math.floor(Math.random() * 10000)),
      backgroundColor: getRandomColor(),
    },
    {
      label: 'Dataset 3',
      data: labels.map(() => Math.floor(Math.random() * 10000)),
      backgroundColor: getRandomColor(),
    },
  ],
}

export const data2 = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => Math.floor(Math.random() * 10000)),
      backgroundColor: getRandomColor(),
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => Math.floor(Math.random() * 10000)),
      backgroundColor: getRandomColor(),
    },
    {
      label: 'Dataset 3',
      data: labels.map(() => Math.floor(Math.random() * 10000)),
      backgroundColor: getRandomColor(),
    },
  ],
}
function App() {
  return (
    <div>
      <Navbar sticky="top" bg="light" expand="lg">
        <Container>
          <NavDropdown id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Navbar.Brand href="#home">Brand</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Link</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Card>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Breadcrumb
            </Breadcrumb.Item>
          </Breadcrumb>
        </Card>
      </Container>

      <Container>
        <Card>
          <Bar options={options} data={data} />;
        </Card>
      </Container>

      <Container>
        <Row>
          <Col lg={3} md={6}>
            <Card style={{ width: '20rem' }}>
              <Card.Body>
                Card.Body
                <Card.Title>Card.Title</Card.Title>
                <Card.Text>Card.Text</Card.Text>
                <ProgressBar now={60}>ProgressBar</ProgressBar>
                <Card.Subtitle>Card.Subtitle</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={6}>
            <Card style={{ width: '20rem' }}>
              <Card.Body>
                Card.Body
                <Card.Title>Card.Title</Card.Title>
                <Card.Text>Card.Text</Card.Text>
                <ProgressBar now={60}>ProgressBar</ProgressBar>
                <Card.Subtitle>Card.Subtitle</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={6}>
            <Card style={{ width: '20rem' }}>
              <Card.Body>
                Card.Body
                <Card.Title>Card.Title</Card.Title>
                <Card.Text>Card.Text</Card.Text>
                <ProgressBar now={60}>ProgressBar</ProgressBar>
                <Card.Subtitle>Card.Subtitle</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={6}>
            <Card style={{ width: '20rem' }}>
              <Card.Body>
                Card.Body
                <Card.Title>Card.Title</Card.Title>
                <Card.Text>Card.Text</Card.Text>
                <ProgressBar now={60}>ProgressBar</ProgressBar>
                <Card.Subtitle>Card.Subtitle</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Card>
          <Bar options={options2} data={data2} />;
        </Card>
      </Container>
    </div>
  )
}

export default App
