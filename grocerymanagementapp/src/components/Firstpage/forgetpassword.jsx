// import React, { useState } from 'react';
// import axios from 'axios';

// const ForgotPassword = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [verificationCode, setVerificationCode] = useState('');
//   const [newUsername, setNewUsername] = useState('');
//   const [newPassword, setNewPassword] = useState('');

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Send verification code request to backend
//       const verificationCodeResponse = await axios.post('/api/sendVerificationCode', { phoneNumber });

//       // Verify verification code with backend
//       const verifyCodeResponse = await axios.post('/api/verifyVerificationCode', { phoneNumber, verificationCode });

//       // Reset password with new username and password
//       const resetPasswordResponse = await axios.post('/api/resetPassword', { phoneNumber, newUsername, newPassword });

//       // Handle success
//       console.log('Password reset successful!');
//     } catch (error) {
//       // Handle error
//       console.error('Failed to reset password:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Forgot Password</h1>
//       <form onSubmit={handleFormSubmit}>
//         <label>
//           Phone Number:
//           <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
//         </label>
//         <label>
//           Verification Code:
//           <input type="text" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
//         </label>
//         <label>
//           New Username:
//           <input type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
//         </label>
//         <label>
//           New Password:
//           <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
//         </label>
//         <button type="submit">Reset Password</button>
//       </form>
//     </div>
//   );
// };

// export default ForgotPassword;