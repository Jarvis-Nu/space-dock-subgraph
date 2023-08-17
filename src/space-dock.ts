import {
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  VentureBaseURIUpdated as VentureBaseURIUpdatedEvent,
  VentureCreated as VentureCreatedEvent
} from "../generated/SpaceDock/SpaceDock"
import {
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  VentureBaseURIUpdated,
  VentureCreated
} from "../generated/schema"

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVentureBaseURIUpdated(
  event: VentureBaseURIUpdatedEvent
): void {
  let entity = new VentureBaseURIUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.founder = event.params.founder
  entity.ventureBaseURI = event.params.ventureBaseURI

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVentureCreated(event: VentureCreatedEvent): void {
  let entity = new VentureCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.ventureId = event.params.ventureId
  entity.data_name = event.params.data.name
  entity.data_thumbnail_url = event.params.data.thumbnailUrl
  entity.data_about = event.params.data.about
  entity.data_profiles_website = event.params.data.profiles.website
  entity.data_profiles_twitter = event.params.data.profiles.twitter
  entity.data_profiles_github = event.params.data.profiles.github
  entity.data_profiles_blog = event.params.data.profiles.blog
  entity.data_op_multisig = event.params.data.op_multisig
  entity.founder = event.params.founder
  entity.createdAt = event.params.createdAt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
