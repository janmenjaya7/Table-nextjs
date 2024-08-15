import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import InfoIcon from "@mui/icons-material/Info";
import EventIcon from "@mui/icons-material/Event";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function Header() {
  return (
    <>
      <div>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <div>
            <Stack direction="row" spacing={2}>
              <Chip label="PRIMARY" color="success" variant="outlined" />
              <Chip label="SECONDARY" variant="outlined" color="success" />
              <Chip label="THIRDLY" variant="outlined" color="success" />
            </Stack>
          </div>

          <div>
            <Stack spacing={2} direction="row">
              <Button
                variant="outlined"
                color="success"
                startIcon={<AutorenewIcon />}
              >
                Update data BD
              </Button>
              <Button
                variant="contained"
                color="success"
                startIcon={<AutorenewIcon />}
              >
                Update Inventory
              </Button>
              <InfoIcon color="success" />
            </Stack>
          </div>
        </Box>
      </div>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginTop: 1 }}
      >
        <div>
          <h1>PRIMARY DATA</h1>
          <p>parchment be turns stand veela fawkes mistletoe snare drops</p>
        </div>
        <div>
          <Stack spacing={2} direction="row">
            <Button
              variant="outlined"
              color="success"
              startIcon={<PlaylistAddIcon />}
            >
              Add service
            </Button>
            <Button
              variant="outlined"
              color="success"
              startIcon={<PlaylistAddIcon />}
            >
              Add Houk Service
            </Button>
          </Stack>
        </div>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ padding: 2 }}
      >
        <Stack spacing={2} direction="row">
          <Button variant="outlined" color="success" endIcon={<EventIcon />}>
            Choose a Date
          </Button>
          <Button
            variant="outlined"
            color="success"
            endIcon={<KeyboardArrowDownIcon />}
          >
            Select a Ornare
          </Button>
          <Button
            variant="outlined"
            color="success"
            endIcon={<KeyboardArrowDownIcon />}
          >
            Select an Ultrices
          </Button>
          <Button
            variant="outlined"
            color="success"
            endIcon={<KeyboardArrowDownIcon />}
          >
            Select a Erat
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default Header;
