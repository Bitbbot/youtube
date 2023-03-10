export const getSwitches = ({ videos, videosPerPage, currentId }) => {
  const pages = Math.ceil(videos / videosPerPage);
  const currentPage = Math.ceil((currentId + 1) / videosPerPage);
  let switchesArray = [];
  if (pages >= 5) {
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
  } else if (pages === 4) {
    if (currentPage === 1) {
      switchesArray = [
        { isOn: true, switchesOn: currentId },
        { isOn: false, switchesOn: currentId + videosPerPage },
        { isOn: false, switchesOn: currentId + videosPerPage * 2 },
        { isOn: false, switchesOn: currentId + videosPerPage * 3 },
      ];
    } else if (currentPage === 2) {
      switchesArray = [
        { isOn: false, switchesOn: currentId - videosPerPage },
        { isOn: true, switchesOn: currentId },
        { isOn: false, switchesOn: currentId + videosPerPage },
        { isOn: false, switchesOn: currentId + videosPerPage * 2 },
      ];
    } else if (currentPage === 3) {
      switchesArray = [
        { isOn: false, switchesOn: currentId - videosPerPage * 2 },
        { isOn: false, switchesOn: currentId - videosPerPage },
        { isOn: true, switchesOn: currentId },
        { isOn: false, switchesOn: currentId + videosPerPage },
      ];
    } else if (currentPage === 4) {
      switchesArray = [
        { isOn: false, switchesOn: currentId - videosPerPage * 3 },
        { isOn: false, switchesOn: currentId - videosPerPage * 2 },
        { isOn: false, switchesOn: currentId - videosPerPage },
        { isOn: true, switchesOn: currentId },
      ];
    }
  } else if (pages === 3) {
    if (currentPage === 1) {
      switchesArray = [
        { isOn: true, switchesOn: currentId },
        { isOn: false, switchesOn: currentId + videosPerPage },
        { isOn: false, switchesOn: currentId + videosPerPage * 2 },
      ];
    } else if (currentPage === 2) {
      switchesArray = [
        { isOn: false, switchesOn: currentId - videosPerPage },
        { isOn: true, switchesOn: currentId },
        { isOn: false, switchesOn: currentId + videosPerPage },
      ];
    } else if (currentPage === 3) {
      switchesArray = [
        { isOn: false, switchesOn: currentId - videosPerPage * 2 },
        { isOn: false, switchesOn: currentId - videosPerPage },
        { isOn: true, switchesOn: currentId },
      ];
    }
  } else if (pages === 2) {
    if (currentPage === 1) {
      switchesArray = [
        { isOn: true, switchesOn: currentId },
        { isOn: false, switchesOn: currentId + videosPerPage },
      ];
    } else if (currentPage === 2) {
      switchesArray = [
        { isOn: false, switchesOn: currentId - videosPerPage },
        { isOn: true, switchesOn: currentId },
      ];
    }
  } else if (pages === 1) {
    switchesArray = [{ isOn: true, switchesOn: currentId }];
  }
  return switchesArray;
};
