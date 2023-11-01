import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

import { useGetChatsQuery } from '~/store'
import { Loading } from '~/shared/ui/Loading'

export function ChatList() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const { data: chats, isLoading } = useGetChatsQuery()

  if (isLoading) return <Loading />

  return (
    <List>
      {chats?.map((chat) => (
        <ListItem key={chat.id} disablePadding>
          <ListItemButton
            onClick={() => navigate(`/${chat.slug}`)}
            selected={pathname === `/${chat.slug}`}
            divider
          >
            <ListItemText primary={chat.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}
