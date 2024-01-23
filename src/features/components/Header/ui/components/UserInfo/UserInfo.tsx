// import { rem, Stack, Tooltip, UnstyledButton } from '@mantine/core';
// import type { IconHome2 } from '@tabler/icons-react';
// import { IconLogin, IconLogout } from '@tabler/icons-react';
// import { useNavigate } from 'react-router-dom';

// import classes from './Navbar.module.css';

// interface NavbarLinkProps {
//   icon: typeof IconHome2;
//   label: string;
//   active?: boolean;
//   onClick?(): void;
// }

// const NavbarLink = ({ icon: Icon, label, active, onClick }: NavbarLinkProps) => {
//   return (
//     <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
//       <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
//         <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
//       </UnstyledButton>
//     </Tooltip>
//   );
// };

// export const Navbar = () => {
//   const navigate = useNavigate();
//   const isAuth = true;

//   const hendlelogOut = () => {
//     navigate('/');
//   };
//   const hendlelogin = () => {
//     navigate('/auth');
//   };

//   return (
//     <Stack justify="center" gap={0}>
//       {user.id && (
//         <HeaderMenu tooltip="admin">
//           <HeaderMenu.Control>
//             <Avatar
//               className=" cursor-pointer"
//               radius={999}
//               size="md"
//               src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
//             />
//           </HeaderMenu.Control>
//           <HeaderMenu.Dropdown>
//             <Menu.Item icon={<User size={16} />}>Profile</Menu.Item>
//             <Menu.Item icon={<Star size={16} />}>Your stars</Menu.Item>
//             <Menu.Item icon={<ClipboardList size={16} />}>Your sumbits</Menu.Item>
//             <Menu.Item icon={<ChartBar size={16} />}>Your audits</Menu.Item>
//             <Menu.Item icon={<History size={16} />}>History</Menu.Item>
//             <Menu.Divider />
//             <Menu.Item icon={<Settings size={16} />}>Settings</Menu.Item>
//             <Menu.Item icon={<InfoCircle size={16} />}>About</Menu.Item>
//             <Menu.Divider />
//             <Menu.Item color="red" icon={<Logout size={16} />} onClick={handleLogOutClick}>
//               Log out
//             </Menu.Item>
//           </HeaderMenu.Dropdown>
//         </HeaderMenu>
//       )}
//     </Stack>
//   );
// };
