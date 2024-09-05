import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import iconRules from '../assets/image-rules.svg'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

interface RulesDialogProps {
  handleClose: () => void,
  open: boolean
}

export default function RulesDialog(props: RulesDialogProps) {

  return (
    <BootstrapDialog
      onClose={props.handleClose}
      aria-labelledby="customized-dialog-title"
      open={props.open}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        RULES
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={props.handleClose}
        sx={(theme) => ({
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
      <CloseIcon />
      </IconButton>
      <DialogContent>
        <img src={iconRules} alt="Rules" />
      </DialogContent>
    </BootstrapDialog>
  )
}