import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import './BasicModal.css'

import Latteinbox from '../../../public/lateinbox.jpg'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal  ()  {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{fontStyle: "italic",fontSize: "18px", color: "#AD6132",textDecoration: "underline"}}>Tìm hiểu thêm</Button>
      <Modal
        className='boxmodal'
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="box">
          <img src={Latteinbox} alt="latte" />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Latte Cà phê là gì?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p>Latte hay cafe latte là một thức uống nổi tiếng có nguồn gốc từ Ý với thành phần chính bao gồm 1 shot cà phê đen kết hợp cùng vị ngọt, béo ngậy của sữa. Tại Scandinavie và Bắc Âu, tên gọi latte chỉ một loại đồ uống kết hợp giữa espresso và sữa, trong khi latte của người Pháp là sự kết hợp giữa espresso và sữa đánh (khuấy).</p><br />
            <p>Món đồ uống này có được kết hợp các nguyên liệu với tỉ lệ phù hợp cộng với cách bài trí bắt mắt vừa tạo nên phần nhìn hấp dẫn, vừa mang đến hương vị tuyệt vời, được đánh giá cao từ những người yêu thích cafe.</p><br />
            <p>Ngoài ra, điểm nổi bật khi nhắc tới latte chính là nghệ thuật tạo hình. Hình vẽ được tạo lên bằng cách rót sữa (sau khi được gia nhiệt làm nóng sữa với phương pháp kỹ thuật steamed milk hoặc frothed milk) để tạo nên nhiều hình như lá, tim, khuôn mặt,…</p>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
