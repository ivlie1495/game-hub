import { BsChevronDown } from 'react-icons/bs';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

import usePlatforms from '../hooks/usePlatforms';
import usePlatform from '../hooks/usePlatform';
import useGameQueryStore from '@stores/gameQueryStore';

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  const setPlatformId = useGameQueryStore((state) => state.setPlatformId);
  const selectedPlatformId = useGameQueryStore(
    (state) => state.gameQuery.platformId
  );
  const platform = usePlatform(selectedPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
