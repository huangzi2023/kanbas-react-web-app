import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    await client.updateUser(account);
  };
  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };
  useEffect(() => {
    fetchAccount();
  }, []);
  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <input
            value={account.username}
            readOnly
            placeholder="username"
            className="form-control mb-2"
          />
          <input
            value={account.password}
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
            type="password"
            className="form-control mb-2"
          />
          <input
            value={account.firstName}
            onChange={(e) =>
              setAccount({ ...account, firstName: e.target.value })
            }
            className="form-control mb-2"
          />
          <input
            value={account.lastName}
            onChange={(e) =>
              setAccount({ ...account, lastName: e.target.value })
            }
            className="form-control mb-2"
          />
          <input
            value={account.dob}
            type="date"
            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
            className="form-control mb-2"
          />
          <input
            value={account.email}
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
            className="form-control mb-2"
            type="email"
          />
          <select
            value={account.role}
            onChange={(e) => setAccount({ ...account, role: e.target.value })}
            className="form-control mb-2"
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button onClick={save} className="btn btn-primary w-100 mb-2">
            Save
          </button>
          <button onClick={signout} className="btn btn-danger w-100 mb-2">
            Signout
          </button>
          <Link to="/project/admin/users" className="btn btn-warning w-100">
            Users
          </Link>
        </div>
      )}
    </div>
  );
}
export default Account;
