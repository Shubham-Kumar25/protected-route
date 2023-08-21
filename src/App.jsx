import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home/Home";
import Login from "./Login/Login";
import MyBlog from "./MyBlog/MyBlog";
import MyOrders from "./MyOrders/MyOrders";
import Profile from "./Profile/Profile";
import Dashboard from "./Dashboard/Dashboard";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

function App() {
  const { isAuthenticated } = useSelector((state) => state.root);
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              adminRoute={true}
              isAdmin={true}
            >
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        {/* <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/myorders"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MyOrders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/myblog"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MyBlog />
            </ProtectedRoute>
          }
        /> */}

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/myblog" element={<MyBlog />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
