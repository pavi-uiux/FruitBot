from mpi4py import MPI

def main():
    # Initialize MPI
    comm = MPI.COMM_WORLD
    rank = comm.Get_rank()
    size = comm.Get_size()

    # Root process displays the menu and takes input
    if rank == 0:
        print(f"Welcome to the MPI Collective Data Movement Demo!")
        print(f"Total processes: {size}")
        print("1. Broadcast")
        print("2. Scatter")
        print("3. Gather")
        print("4. Reduce")
        choice = int(input("Enter your choice (1-4): "))
    else:
        choice = None

    # Broadcast the choice to all processes
    choice = comm.bcast(choice, root=0)

    # Perform the selected operation
    if choice == 1:
        broadcast_demo(comm, rank)
    elif choice == 2:
        scatter_demo(comm, rank, size)
    elif choice == 3:
        gather_demo(comm, rank, size)
    elif choice == 4:
        reduce_demo(comm, rank)
    else:
        if rank == 0:
            print("Invalid choice!")

def broadcast_demo(comm, rank):
    # Root process takes input and broadcasts it
    if rank == 0:
        data = int(input("Enter a number to broadcast: "))
    else:
        data = None

    data = comm.bcast(data, root=0)
    print(f"Process {rank} received broadcasted data: {data}")

def scatter_demo(comm, rank, size):
    # Root process takes input and scatters it
    if rank == 0:
        data = [int(x) for x in input("Enter numbers to scatter (space-separated): ").split()]
    else:
        data = None

    local_data = comm.scatter(data, root=0)
    print(f"Process {rank} received scattered data: {local_data}")

def gather_demo(comm, rank, size):
    # Each process takes input and gathers it at the root
    local_data = int(input(f"Enter a number for process {rank}: "))
    gathered_data = comm.gather(local_data, root=0)

    if rank == 0:
        print(f"Gathered data at root: {gathered_data}")

def reduce_demo(comm, rank):
    # Each process takes input and reduces it at the root
    local_data = int(input(f"Enter a number for process {rank}: "))
    reduced_data = comm.reduce(local_data, op=MPI.SUM, root=0)

    if rank == 0:
        print(f"Reduced (summed) data at root: {reduced_data}")

if __name__ == "__main__":
    main()