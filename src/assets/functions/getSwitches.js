export const getSwitches = ({ videos, videosPerPage, currentId }) => {
  const pages = Math.ceil(videos / videosPerPage);
  const currentPage = Math.ceil((currentId + 1) / videosPerPage);
  let switchesArray = [];
  if (currentPage === 1) {
    switchesArray = [
      { isOn: true, switchesOn: currentId },
      { isOn: false, switchesOn: currentId + videosPerPage },
      { isOn: false, switchesOn: currentId + videosPerPage * 2 },
      { isOn: false, switchesOn: currentId + videosPerPage * 3 },
      { isOn: false, switchesOn: currentId + videosPerPage * 4 },
    ];
  } else if (currentPage === 2) {
    switchesArray = [
      { isOn: false, switchesOn: currentId - videosPerPage },
      { isOn: true, switchesOn: currentId },
      { isOn: false, switchesOn: currentId + videosPerPage },
      { isOn: false, switchesOn: currentId + videosPerPage * 2 },
      { isOn: false, switchesOn: currentId + videosPerPage * 3 },
    ];
  } else if (currentPage === pages - 1) {
    switchesArray = [
      { isOn: false, switchesOn: currentId - videosPerPage * 3 },
      { isOn: false, switchesOn: currentId - videosPerPage * 2 },
      { isOn: false, switchesOn: currentId - videosPerPage },
      { isOn: true, switchesOn: currentId },
      { isOn: false, switchesOn: currentId + videosPerPage },
    ];
  } else if (currentPage === pages) {
    switchesArray = [
      { isOn: false, switchesOn: currentId - videosPerPage * 4 },
      { isOn: false, switchesOn: currentId - videosPerPage * 3 },
      { isOn: false, switchesOn: currentId - videosPerPage * 2 },
      { isOn: false, switchesOn: currentId - videosPerPage },
      { isOn: true, switchesOn: currentId },
    ];
  } else {
    switchesArray = [
      { isOn: false, switchesOn: currentId - videosPerPage * 2 },
      { isOn: false, switchesOn: currentId - videosPerPage },
      { isOn: true, switchesOn: currentId },
      { isOn: false, switchesOn: currentId + videosPerPage },
      { isOn: false, switchesOn: currentId + videosPerPage * 2 },
    ];
  }
  return switchesArray;
};
